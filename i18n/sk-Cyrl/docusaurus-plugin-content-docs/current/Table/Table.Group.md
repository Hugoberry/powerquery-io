---
title: Table.Group
---

# Table.Group


## Description

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


## Details

Zoskupí riadky <code>table</code> podľa kľúčových stĺpcov, ktoré definuje <code>key</code>. <code>key</code> môže byť názov jedného stĺpca alebo zoznam názvov stĺpcov.    Pre každú skupinu je vytvorený záznam obsahujúci kľúčové stĺpce (a ich hodnoty) spolu so všetkými agregovanými stĺpcami, ktoré zadá <code>aggregatedColumns</code>.    Voliteľne je možné zadať aj <code>groupKind</code> a <code>comparer</code>.<br />    <br />    Ak sú údaje už zoradené podľa kľúčových stĺpcov, potom je možné poskytnúť <code>groupKind</code> GroupKind.Local. V niektorých prípadoch to môže zlepšiť výkon zoskupenia,    pretože sa predpokladá, že všetky riadky s danou množinou kľúčových hodnôt sú súvislé.<br />    <br />    Keď prechádzate <code>comparer</code>, všimnite si, že ak odlišné kľúče berie ako rovnaké, môže sa umiestniť riadok do skupiny, ktorej kľúče sa líšia od jeho vlastného kľúča.<br />    <br />    Táto funkcia nezaručuje poradie riadkov, ktoré vráti.  


## Examples

### Example #1 
Zoskupte tabuľku, pričom pridajte agregačný stĺpec [total] obsahujúci súčet cien (&#34;each List.Sum([price])&#34;).
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
