---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Egy M kifejezés kiértékelésének eredményét adja vissza.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Egy M kifejezés (<code>document</code>) kiértékelésének eredményét adja vissza, a(z) <code>environment</code> által meghatározott, rendelkezésre álló, hivatkozható azonosítókkal együtt.


## Examples

### Example #1 
Egyszerű összeg kiértékelése.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Összetettebb összeg kiértékelése.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Egy szöveges érték és egy azonosító összefűzésének kiértékelése.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
