---
title: Text.Middle
---

# Text.Middle


## Description

Қосалқы жолды арнайы ұзындыққа қайтарады.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

<code>count</code> таңбаны немесе <code>text</code> соңына дейін қайтарады; <code>start</code> ығысуында.


## Examples

### Example #1 
6 индексінен бастап 5 таңбаға дейінгі &#34;Сәлем, әлем&#34; мәтінінен қосалқы жолды табыңыз.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
6 индексінен бастап соңына дейінгі &#34;Сәлем, әлем&#34; мәтінінен қосалқы жолды табыңыз.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
