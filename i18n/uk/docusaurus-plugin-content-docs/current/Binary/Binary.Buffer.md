---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Буферизує двійкове значення в пам&#39;яті.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Буферизує двійкове значення в пам'яті. Результатом цього виклику буде стабільне двійкове значення, тобто воно матиме визначену довжину та порядок байтів.


## Examples

### Example #1 
Створює стабільну версію двійкового значення.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
