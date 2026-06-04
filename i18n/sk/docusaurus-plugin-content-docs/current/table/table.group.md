---
title: Table.Group
---

# Table.Group


Zoskupí riadky v tabuľke obsahujúce rovnaký kľúč.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Zoskupí riadky `table` podľa kľúčových stĺpcov, ktoré definuje `key`. `key` môže byť názov jedného stĺpca alebo zoznam názvov stĺpcov. Pre každú skupinu je vytvorený záznam obsahujúci kľúčové stĺpce (a ich hodnoty) spolu so všetkými agregovanými stĺpcami, ktoré zadá `aggregatedColumns`. Voliteľne je možné zadať aj `groupKind` a `comparer`.  
  
Ak sú údaje už zoradené podľa kľúčových stĺpcov, potom je možné poskytnúť `groupKind` GroupKind.Local. V niektorých prípadoch to môže zlepšiť výkon zoskupenia, pretože sa predpokladá, že všetky riadky s danou množinou kľúčových hodnôt sú súvislé.  
  
Keď prechádzate `comparer`, všimnite si, že ak odlišné kľúče berie ako rovnaké, môže sa umiestniť riadok do skupiny, ktorej kľúče sa líšia od jeho vlastného kľúča.  
  
Táto funkcia nezaručuje poradie riadkov, ktoré vráti.


## Examples

### Example #1
Zoskupte tabuľku, pričom pridajte agregačný stĺpec \[total\] obsahujúci súčet cien ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
