---
published: true
date: 2025-04-06
title: Controller for PiperWire Wires and Sample Rate
tags:
  - programming
  - bash
  - tools
  - pipewire
  - sunday
---
Hey there! It was a Sunday afternoon and I thought it'd be a good idea to create a utility script to automate node connections and change the buffer size for Pipewire.

I use the utilities provided by the [Pipewire Programs](https://docs.pipewire.org/page_programs.html). Its mainly just wrapper commands around `pw-link` and `pw-cli` with some regex to tie everything together.

Usage:

deadsec \[option\] \[flags\]

There are 2 main methods that being `link` and `sample`. An example usage for both can follow as:

The following code modifies the buffer size to be 2048 bytes in size

```
# Code for buffer size change

deadsec sample 2048
```

Next is the linker function, where I link all Chrome sources to all Discord Sinks (passing in the -d flag will disconnect rather than create a link).

```
# Code for linking

deadsec link Chrome Discord
```

[Source Code](https://gist.github.com/NeoSahadeo/6febda30e303e994f718d344f7a55bfb)

```
#!/bin/bash


: '
	Deadsec

	Description: pipewire wire linker
	Author(s): Neo Sahadeo
	Date: 06/04/2025

	---

	usage:
	deadsec link output input [-d]

	or

	deadsec sample SAMPLE_RATE

	output: Thing that makes sound
	input: Thing that takes in sound
	-d: optional for disconnect

	input will only use the first 2 sinks found
'



function help() {
	echo """usage:
	deadsec [command] [flags...]
	"""
}

function parser() {
	if [[ $# -eq 0 || $1 == "help" ]]; then
		help
	elif [[ $1 == "sample" ]]; then
		if [[ -z $2 ]]; then
			echo "CANNOT LEAVE IT EMPTY!"
		else
			pw-metadata -n settings 0 clock.force-quantum $2
		fi
	elif [[ $1 == "link" ]]; then
		if [[ -z $2 || -z $3 ]]; then
			echo """Command: link output input [-d]

	-d to disconnect.
			"""
		else
			output_ids=($(pw-link -I -o  | grep -Poe "(\d+) (?=$2)"))
			input_ids=($(pw-link -I -i  | grep -Poe "$3.*"))
			input_count=$(pw-link -I -i  | grep -Poe "$3.*" -c)

			# How many words each port contains
			if [[ $input_count -eq 0 ]]; then
				kill $$
			fi
			words=$((${#input_ids[@]} / $input_count))

			left_in=""
			right_in=""
			swap=0
			for (( x=0; x < $(($words * 2)); x++ )); do
				if [[ $x -eq $words ]]; then
					swap=1
				fi
				if [[ swap -eq 0 ]]; then
					left_in="$left_in ${input_ids[$x]}"
				else
					right_in="$right_in ${input_ids[$x]}"
				fi
			done
			left_in=$(echo $left_in | grep -Poe ".*")
			right_in=$(echo $right_in | grep -Poe ".*")

			for (( x = 0; x < ${#output_ids[@]}; x++ )); do
				id=${output_ids[$x]}
				if (( $x % 2 == 0 )); then
					nohup pw-link $id "$left_in" $4 > /dev/null 2>&1 &
				else
					nohup pw-link $id "$right_in" $4 > /dev/null 2>&1 &
				fi
			done

			# Clean up
			pkill pw-link

		fi
	fi
}

parser $1 $2 $3 $4
```