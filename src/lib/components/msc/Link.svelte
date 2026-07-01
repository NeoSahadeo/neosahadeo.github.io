<script lang="ts">
let {link = "", children}: {
link?: string;
children: any;
} =  $props()
</script>

<a class="flex gap-2 items-center text-blue-300 font-bold" href={link ? link:"#"}>
	{@render children()}
</a>
