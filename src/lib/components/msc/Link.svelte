<script lang="ts">
import LinkIcon from "../icons/LinkIcon.svelte";
let {link = "", children}: {
link?: string;
children: any;
} =  $props()
</script>

<a class="flex gap-2 link link-primary" href={link ? link:"#"} target="_blank">
<LinkIcon /> {@render children()}
</a>
