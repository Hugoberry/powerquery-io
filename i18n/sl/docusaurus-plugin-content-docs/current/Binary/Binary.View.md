---
title: Binary.View
---

# Binary.View


## Description

Ustvari ali podaljša binary z uporabniško določenimi rutinami za obravnavo za postopke poizvedbe in dejanja.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Vrne pogled za <code>binary</code>, v katerem so funkcije, določene v <code>handlers</code>, uporabljene namesto privzetega delovanja postopka, ko je za pogled uporabljen postopek.<br />Če je na voljo <code>binary</code>, so vse funkcije rutine izbirne. Če <code>binary</code> ni na voljo, je zahtevana funkcija rutine <code>GetStream</code>. Če funkcija rutine ni navedena za postopek, je privzeto delovanje postopka uporabljeno za <code>binary</code> (razen v primeru funkcije <code>GetExpression</code>).<br />Funkcije rutine za obravnavo morajo vrniti vrednost, ki je semantično enakovredna rezultatu uporabe postopka za <code>binary</code> (ali nastalega pogleda v primeru funkcije <code>GetExpression</code>).<br />Če pri funkciji rutine za obravnavo pride do napake, je za pogled uporabljeno privzeto delovanja postopka.<br />Parameter <code>Binary.View</code> lahko uporabite za izvedbo zlaganja v viru podatkov – prevod poizvedb M v poizvedbe, značilne za vir (npr. za ustvarjanje izjav T-SQL iz poizvedb M).<br />Popoln opis funkcije <code>Binary.View</code> najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.<br />


## Examples

### Example #1 
Ustvarite osnovni pogled, ki ne zahteva dostopa do podatkov, da bi bilo mogoče določiti dolžino.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
