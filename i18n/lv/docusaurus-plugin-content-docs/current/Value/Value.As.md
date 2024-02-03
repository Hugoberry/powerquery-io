---
title: Value.As
---

# Value.As


## Description

Tiek atgriezta vērtība, ja tā ir saderīga ar norādīto tipu.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Tiek atgriezta vērtība, ja tā ir saderīga ar norādīto tipu. Tas ir ekvivalents "as" operatoram opcijā M, izņemot to, ka tas var akceptēt identifikatora tipu atsauces, piemēram, Number.Type.


## Examples

### Example #1 
Skaitļa pārvēršana skaitlī.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Mēģinājums pārvērst teksta vērtību par skaitli.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
