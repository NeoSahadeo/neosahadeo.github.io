---
published: true
date: 2025-04-03
title: Huffman Coding
tags:
  - data compression
---
> Huffman coding is a technique for compressing data without losing any of the details (_Huffman Coding Algorithm_, n.d.)

# History

David A. Huffman, an electrical engineer from Ohio, is the creator of _Huffman Coding._ He received numerous awards, latest of which, the Richard Hamming Medal in 1999.

Sadly, Mr Huffman passed away in 1999 after battling cancer.

# What is a Huffman Code

A Huffman code is a type of code that is used for lossless compression. Which means all data compressed can be used to reconstruct bit-for-bit the exact data before the compression.

## Example:

`BCAADDDCCACACAC`

Counting the total amount of bits equal to 15 \* 8 = 120

Where ASCII representation of the characters follow:

| Binary Value | Symbol |
| --- | --- |
| 01000001 | A   |
| 01000010 | B   |
| 01000011 | C   |
| 01000100 | D   |

The last 5 bits repeat 01000, which can be removed.

| Binary Value | Symbol |
| --- | --- |
| 001 | A   |
| 010 | B   |
| 011 | C   |
| 100 | D   |

Recalculating the bits gives 15 \* 3 = 45 for the original message. Plus the ASCII characters that should be included along with its new values which will be calculated as 5 \* 8 = 40 (ASCII characters) and 3 \* 5 = 15 (Remapped values). Total bits for the message 45 + 40 + 15 = 100

# References:

[https://www.ascii-code.com/](https://www.ascii-code.com/)

_Huffman coding algorithm_. (n.d.). Retrieved March 29, 2025, from [https://www.programiz.com/dsa/huffman-coding](https://www.programiz.com/dsa/huffman-coding)
