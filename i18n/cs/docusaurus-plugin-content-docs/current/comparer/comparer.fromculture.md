---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Vrátí funkci porovnávací metody založenou na zadané jazykové verzi a rozlišování velkých a malých písmen.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Vrátí porovnávací funkci, která používá `culture` a rozlišování malých a velkých písmen určené `ignoreCase` k provedení comparisons.  
  
Porovnávací funkce přijímá dva argumenty a vrací -1, 0 nebo 1 na základě toho, jestli je první hodnota menší než, rovna, nebo větší než druhá.  
  
Výchozí hodnota pro `ignoreCase` je false. `culture` musí být jedním z národních prostředí podporovaných rozhraním .NET Framework (například en-US).


## Examples

### Example #1
Porovnáním hodnot „a“ a „A“ s použitím národního prostředí „en-US“ určí, jestli jsou hodnoty stejné.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Porovnáním hodnot „a“ a „A“ s použitím národního prostředí „en-US“ a s ignorováním velikosti písmen určí, jestli jsou hodnoty stejné.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
