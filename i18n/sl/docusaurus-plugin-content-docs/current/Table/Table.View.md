---
title: Table.View
---

# Table.View


## Description

Ustvari ali podaljša tabelo z uporabniško določenimi rutinami za obravnavo za postopke poizvedbe in dejanja.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Vrne pogled za <code>table</code>, v katerem so funkcije, določene v <code>handlers</code>, uporabljene namesto privzetega delovanja postopka, ko je za pogled uporabljen postopek.<br />Če je na voljo <code>table</code>, so vse funkcije rutine izbirne. Če <code>table</code> ni na voljo, sta zahtevani funkciji rutine <code>GetType</code> in <code>GetRows</code>. Če funkcija rutine ni navedena za postopek, je privzeto delovanje postopka uporabljeno za <code>table</code> (razen v primeru funkcije <code>GetExpression</code>).<br />Funkcije rutine za obravnavo morajo vrniti vrednost, ki je semantično enakovredna rezultatu uporabe postopka za <code>table</code> (ali nastalega pogleda v primeru funkcije <code>GetExpression</code>).<br />Če pri funkciji rutine za obravnavo pride do napake, je za pogled uporabljeno privzeto delovanja postopka.<br />Parameter <code>Table.View</code> lahko uporabite za izvedbo zlaganja v viru podatkov – prevod poizvedb M v poizvedbe, značilne za vir (npr. za ustvarjanje izjav T-SQL iz poizvedb M).<br />Popoln opis funkcije <code>Table.View</code> najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.<br />


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
