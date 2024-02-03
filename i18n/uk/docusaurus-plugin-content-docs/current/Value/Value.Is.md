---
title: Value.Is
---

# Value.Is


## Description

Визначає, чи сумісне значення з указаним типом.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Визначає, чи сумісне значення з указаним типом. Ця функція еквівалентна до оператора "is" у M, за винятком того, що може приймати посилання на тип ідентифікатора, такі як Number.Type.


## Examples

### Example #1 
Порівнює два способи визначити, чи сумісне число з типом &#34;число&#34;.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
