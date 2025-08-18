import re

lines = [""" <script lang="ts">
    let { size = 24 } = $props();
</script>
"""]
while True:
    line = input()
    if line == 'finito':
        break
    lines.append(line)

lines = "".join(lines)

lines = re.sub(r"width=\"\d+\"", "width={size}", lines)
lines = re.sub(r"height=\"\d+\"", "height={size}", lines)

file_name = input("File Name: ")
with open(file_name + ".svelte", 'w') as file:
    file.write(lines)
