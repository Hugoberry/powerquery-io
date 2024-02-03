---
title: Value.Optimize
---

# Value.Optimize


## Description

Указывает Value.Expression вернуть для значения оптимизированное выражение.


## Syntax

```powerquery
Value.Optimize(
    value as any
) as any
```


## Details

Если <code>value</code> при использовании в Value.Expression представляет запрос, который можно оптимизировать, эта функция означает, что должно возвращаться оптимизированное выражение. В противном случае <code>value</code> будет передаваться без каких-либо изменений.



## Category
Expression
