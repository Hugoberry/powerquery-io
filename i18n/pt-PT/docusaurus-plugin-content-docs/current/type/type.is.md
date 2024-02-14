---
title: Type.Is
---

# Type.Is


Determina se um valor do tipo &#34;primeiro&#34; é sempre compatível com o tipo &#34;segundo&#34;.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determina se um valor de <code>type1</code> é sempre compatível com <code>type2</code>.


## Examples

### Example #1 
Determine se um valor do tipo &#34;número&#34; também pode ser sempre tratado como o tipo &#34;qualquer&#34;.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Determine se um valor do tipo &#34;qualquer&#34; também pode ser sempre tratado como tipo &#34;número&#34;.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
