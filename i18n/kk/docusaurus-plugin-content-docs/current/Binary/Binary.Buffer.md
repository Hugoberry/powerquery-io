---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Екілік мәнді жадқа буферге сақтайды.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Екілік мәнді жадқа буферге сақтайды.  Бұл шақырудың нәтижесі тұрақты екілік мән болады, яғни, оның анықталған ұзындығы және байттар реті болады.


## Examples

### Example #1 
Екілік мәннің тұрақты нұсқасын жасау.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
