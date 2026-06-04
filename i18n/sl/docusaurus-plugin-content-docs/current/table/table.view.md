---
title: Table.View
---

# Table.View


Ustvari ali podaljša tabelo z uporabniško določenimi rutinami za obravnavo za postopke poizvedbe in dejanja.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Vrne pogled za `table`, v katerem so funkcije, določene v `handlers`, uporabljene namesto privzetega delovanja postopka, ko je za pogled uporabljen postopek.

Če je na voljo `table`, so vse funkcije rutine izbirne. Če `table` ni na voljo, sta zahtevani funkciji rutine `GetType` in `GetRows`. Če funkcija rutine ni navedena za postopek, je privzeto delovanje postopka uporabljeno za `table` (razen v primeru funkcije `GetExpression`).

Funkcije rutine za obravnavo morajo vrniti vrednost, ki je semantično enakovredna rezultatu uporabe postopka za `table` (ali nastalega pogleda v primeru funkcije `GetExpression`).

Če pri funkciji rutine za obravnavo pride do napake, je za pogled uporabljeno privzeto delovanja postopka.

Parameter `Table.View` lahko uporabite za izvedbo zlaganja v viru podatkov – prevod poizvedb M v poizvedbe, značilne za vir (npr. za ustvarjanje izjav T-SQL iz poizvedb M).

Popoln opis funkcije `Table.View` najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.


## Examples

### Example #1
Ustvarite osnovni pogled, ki ne zahteva dostopa do vrstic, da bi bilo mogoče določiti vrsto ali število vrstic.
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
