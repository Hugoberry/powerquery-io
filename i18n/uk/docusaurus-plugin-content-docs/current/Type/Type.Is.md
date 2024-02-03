---
title: Type.Is
---

# Type.Is


## Description

Визначає, чи значення першого типу завжди сумісне з другим типом.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Визначає, чи значення <code>type1</code> завжди сумісне з <code>type2</code>.


## Examples

### Example #1 
Визначає, чи завжди можна розглядати значення типу &#34;число&#34; також як значення типу &#34;будь-який&#34;.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Визначає, чи завжди можна розглядати значення типу &#34;будь-який&#34; також як значення типу &#34;число&#34;.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
