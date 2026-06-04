---
title: Table.View
---

# Table.View


Sukuriama arba pailginama lentelė su vartotojo nustatytomis užklausų ir veiksmų operacijų apdorojimo programomis.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Pateikia `table` rodinį, kur funkcijos, nurodytos `handlers`, yra naudojamos vietoj numatytųjų operacijos veiksmų, kai operacija taikoma rodiniui.

Jei pateikiama `table`, visos apdorojimo programos funkcijos yra pasirinktinės. Jei `table` nepateikiama, būtina naudoti apdorojimo programos funkcijas `GetType` ir `GetRows`. Jei apdorojimo programos funkcija operacijai nenurodyta, `table` bus taikoma numatytoji operacijos elgsena (išskyrus `GetExpression` atvejus).

Apdorojimo programos funkcijos turi pateikti reikšmę, kuri semantiškai lygi rezultatui, gautam `table` pritaikius operaciją (arba gautam rodiniui, jei naudojama `GetExpression`)..

Jei apdorojimo funkcija pateikia klaidą, rodiniui taikoma numatytoji operacijos elgsena.

`Table.View` galima naudoti norint įdiegti perėjimą į duomenų šaltinį – M užklausų vertimą į šaltiniui būdingas užklausas (pvz., kad būtų sukurti T-SQL sakiniai iš M užklausų).

Išsamesnį `Table.View` aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.


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
