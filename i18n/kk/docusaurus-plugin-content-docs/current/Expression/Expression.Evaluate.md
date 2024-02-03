---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

M өрнегін есептеудің нәтижесін қайтарады.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

<code>environment</code> арқылы анықталған сілтеме жасауға болатын қолжетімді идентификаторларымен <code>document</code> M өрнегін есептеудің нәтижесін қайтарады.


## Examples

### Example #1 
Қарапайым қосындыны есептеңіз.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Күрделірек қосындыны есептеңіз.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Идентификаторы бар мәтіндік мәнді біріктіруді есептеңіз.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
