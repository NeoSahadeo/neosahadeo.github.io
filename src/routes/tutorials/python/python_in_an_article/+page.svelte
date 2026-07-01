<script lang="ts">
	import Codeblock from '$lib/components/Codeblock.svelte';
	import H2 from '$lib/components/headings/H2.svelte';
	import { url_resolver } from '$lib/scripts/urlResolver';
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<title>Python in an article</title>
<meta name="Python in an article" content="An article to teach a lot of Python." />
<meta name="keywords" content="Python, Tutorial, Learning, Beginner" />
<meta name="author" content="Neo Sahadeo" />

<h1 class="zilla-slab-regular py-2 text-5xl">Python in an article</h1>
<div class="note-unimportant">
	<p>
		License: <a href="https://creativecommons.org/share-your-work/cclicenses/" target="_blank">
			Creative Commons Attribution (CC BY) license
		</a>
	</p>
	<p>Author: Neo Sahadeo</p>
</div>
<div class="badge bg-red-800">Made with Love💖</div>

<section>
	<p class="py-3">
		In this article, we explore Python. By the end of it you'll be able to write programs in Python.
		This is not a typical Python tutorial, it's not going to explain everything in copious detail
		nor will it hold your hand.
	</p>
	<p>
		It will go over common practices, ideas, paradigms and content that is relevant in real-world
		applications.
	</p>
	<p class="badge mt-2 mb-5 pl-2 text-sm">Python Version used is 3.13.7</p>
	<aside class="bg-base-300 rounded-sm px-5 py-3">
		<h3 class="-ml-1 font-black">Aside:</h3>
		<p>If this is you first time on my website, there are 2 things to know.</p>
		<ul class="list list-disc">
			<li>There is a slider in the middle top of the screen that adjusts the width of the page</li>
			<li>
				If you don't like the style of the page(s), you can change them by going <a
					class="link-accent"
					href={url_resolver('self') + 'settings'}>
					here
				</a>
				.
			</li>
		</ul>
	</aside>
</section>
<section class="my-10">
	<H2 title="Comments" />
	<p>
		Python comments start with a
		<code>#</code>
		and anything after that will be considered part of the comment.
	</p>
	<p class="mt-2">Comments are single-line.</p>
	<br />
	<pre class="hljs rounded-md px-3 py-3"><code
			class="language-python"># Here is an example of a comment.

x = 0 # I can put a comment here

# This is another comment</code> </pre>
	<br />
	<p>
		There is a special 'multi-line' comment called <a
			href="https://www.geeksforgeeks.org/python/python-docstrings/"
			target="_blank"
			class="link-info">
			docstrings
		</a>
		. It is 3 quotes + text + 3 quotes.
	</p>
	<br />
	<p>These are generally used to document functions and classes.</p>
	<br />
	<pre class="hljs rounded-md px-3 py-3"><code
			class="language-python"># This is an example taken from the Python `enum.py`
class Enum(metaclass=EnumType):
    """
    Create a collection of name/value pairs.

    Example enumeration:

    &gt;&gt;&gt; class Color(Enum):
    ...     RED = 1
    ...     BLUE = 2
    ...     GREEN = 3
		"""</code> </pre>
</section>

<section class="mt-10">
	<H2 title="Variables" />
	<p>
		Everything in Python is a class, including classes itself. A variable will have a 'type'
		associated with it which is represented as a high level class.
	</p>
	<br />
	<p>
		Python is a loosely typed language and does not require us to tell the program what type each
		variable is.
	</p>
	<br />
	<pre class="hljs rounded-md px-3 py-3"><code
			class="language-python"># Here is an example of a variable
x = 0 # Assign 0 to x
type (x) # Print the type of x

# Output:
<samp>&lt;class 'int'&gt;</samp>
</code></pre>
	<section class="mt-5">
		<h3 class="mb-3 text-xl">Types of Variables</h3>
		<ul class="ml-6 list-disc">
			<li>Integer, Float, Complex</li>
			<li>Boolean</li>
			<li>Bytes</li>
			<li>String</li>
			<li>List, Set, Tuple</li>
			<li>Dictionary</li>
		</ul>
	</section>
</section>
