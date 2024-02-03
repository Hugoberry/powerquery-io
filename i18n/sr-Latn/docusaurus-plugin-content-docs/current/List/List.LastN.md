---
title: List.LastN
---

# List.LastN


## Description

Vraća poslednju vrednost sa liste.  Opcionalno može da navede broj vrednosti koje treba vratiti ili kvalifikujući uslov.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Vraća poslednju stavku sa liste <code>list</code>. Ako je lista prazna, vraća se izuzetak. Ova funkcija uzima opcionalni parametar, <code>countOrCondition</code>, da bi podržala prikupljanje više stavki ili filtriranje stavki. <code>countOrCondition</code> se može navesti na tri načina: <ul>  <li>Ako se navede broj, vraća se najviše toliko stavki. </li>  <li>Ako se navede uslov, vraćaju se sve stavke koje inicijalno zadovoljavaju taj uslov, počev od kraja liste. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. </li>  <li>Ako je ovaj parametar bez vrednosti, vraća se poslednja stavka sa liste.</li> </ul>


## Examples

### Example #1 
Pronalaženje poslednje vrednosti sa liste \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Pronalaženje poslednjih vrednosti sa liste \{3, 4, 5, -1, 7, 8, 2} koje su veće od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
