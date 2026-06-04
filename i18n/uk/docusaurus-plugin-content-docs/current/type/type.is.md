---
title: Type.Is
---

# Type.Is


Визначає, чи значення першого типу завжди сумісне з другим типом.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Визначає, чи значення `type1` завжди сумісне з `type2`. Параметр `type2` має бути примітивним (або примітивним) значенням типу nullable. В іншому разі поведінка цієї функції невизначена, тому на неї не слід покладатися.


## Examples

### Example #1
Визначає, чи завжди можна розглядати значення типу "число" також як значення типу "будь-який".
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Визначає, чи завжди можна розглядати значення типу "будь-який" також як значення типу "число".
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
