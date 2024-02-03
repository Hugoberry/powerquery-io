---
title: Expression.Evaluate
---

# Expression.Evaluate


## Description

Bir M ifadesinin değerlendirilme sonucunu döndürür.


## Syntax

```powerquery
Expression.Evaluate(
    document as text,
    optional environment as record
) as any
```


## Details

Bir M ifadesinin <code>document</code> değerlendirilme sonucunu, <code>environment</code> tarafından tanımlanan mevcut tanımlayıcılarla birlikte döndürür.


## Examples

### Example #1 
Basit bir toplamı değerlendirin.
```powerquery
Expression.Evaluate("1 + 1")
```

Result: 
```powerquery
2
```


### Example #2 
Daha karmaşık bir toplamı değerlendirin.
```powerquery
Expression.Evaluate("List.Sum({1, 2, 3})", [List.Sum = List.Sum])
```

Result: 
```powerquery
6
```


### Example #3 
Bir metin değerinin bir tanımlayıcı ile birleştirilmesini değerlendirin.
```powerquery
Expression.Evaluate(Expression.Constant("""abc") & " & " & Expression.Identifier("x"), [x = "def"""])
```

Result: 
```powerquery
"""abcdef"""
```




## Category
Expression
