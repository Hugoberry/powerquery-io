---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Повертає функцію засобу порівняння на основі вказаної культури та з урахуванням регістра.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Повертає функцію засобу порівняння, яка використовує `culture`, та чутливість до регістру, визначену `ignoreCase`, для виконання порівнянь.  
  
Функція засобу порівняння приймає два аргументи та повертає -1, 0 або 1 залежно від того, чи перше значення менше, дорівнює або більше за друге.  
  
Стандартне значення `ignoreCase` має значення false. `culture` має бути однією з локалізацій, що підтримуються .NET Framework (наприклад, "en-US").


## Examples

### Example #1
Порівняти "a" та "A" за допомогою локалізації "en-US", щоб визначити, чи значення однакові.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Порівняти "a" та "A" за допомогою локалізації "en-US" без урахування регістра, щоб визначити, чи значення однакові.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
