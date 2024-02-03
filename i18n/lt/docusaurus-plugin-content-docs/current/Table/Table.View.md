---
title: Table.View
---

# Table.View


## Description

Sukuriama arba pailginama lentelė su vartotojo nustatytomis užklausų ir veiksmų operacijų apdorojimo programomis.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Pateikia <code>table</code> rodinį, kur funkcijos, nurodytos <code>handlers</code>, yra naudojamos vietoj numatytųjų operacijos veiksmų, kai operacija taikoma rodiniui.<br />Jei pateikiama <code>table</code>, visos apdorojimo programos funkcijos yra pasirinktinės. Jei <code>table</code> nepateikiama, būtina naudoti apdorojimo programos funkcijas <code>GetType</code> ir <code>GetRows</code>. Jei apdorojimo programos funkcija operacijai nenurodyta, <code>table</code> bus taikoma numatytoji operacijos elgsena (išskyrus <code>GetExpression</code> atvejus).<br />Apdorojimo programos funkcijos turi pateikti reikšmę, kuri semantiškai lygi rezultatui, gautam <code>table</code> pritaikius operaciją (arba gautam rodiniui, jei naudojama <code>GetExpression</code>)..<br />Jei apdorojimo funkcija pateikia klaidą, rodiniui taikoma numatytoji operacijos elgsena.<br /><code>Table.View</code> galima naudoti norint įdiegti perėjimą į duomenų šaltinį – M užklausų vertimą į šaltiniui būdingas užklausas (pvz., kad būtų sukurti T-SQL sakiniai iš M užklausų).<br />Išsamesnį <code>Table.View</code> aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.<br />


## Examples

### Example #1 
Sukurkite pagrindinį rodinį, kuriam nereikia prieigos prie eilučių, kad būtų galima nustatyti tipą arba eilučių skaičių.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
