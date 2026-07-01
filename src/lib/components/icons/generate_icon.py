import re

lines = [""" <script lang="ts">
    let { size = 24 } = $props();
</script>
"""]

try:
    while True:
        line = input()
        lines.append(line)
except KeyboardInterrupt:
    pass

lines = "".join(lines)

lines = re.sub(r" width=\".*?\"", " width={size} ", lines)
lines = re.sub(r" height=\".*?\"", " height={size} ", lines)

file_name = input("File Name: ")
with open(file_name + ".svelte", 'w') as file:
    file.write(lines)
