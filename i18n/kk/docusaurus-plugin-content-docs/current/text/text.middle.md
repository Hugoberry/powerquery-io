---
title: Text.Middle
---

# Text.Middle


Қосалқы жолды арнайы ұзындыққа қайтарады.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

`count` таңбаны немесе `text` соңына дейін қайтарады; `start` ығысуында.


## Examples

### Example #1
6 индексінен бастап 5 таңбаға дейінгі "Сәлем, әлем" мәтінінен қосалқы жолды табыңыз.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
6 индексінен бастап соңына дейінгі "Сәлем, әлем" мәтінінен қосалқы жолды табыңыз.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
0 индексінен бастап 2 таңбаға дейінгі "Сәлем, әлем!" мәтінінен қосалқы жолды табыңыз.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
