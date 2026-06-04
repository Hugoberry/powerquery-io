---
title: Binary.View
---

# Binary.View


Ustvari ali podaljša binary z uporabniško določenimi rutinami za obravnavo za postopke poizvedbe in dejanja.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Vrne pogled za `binary`, v katerem so funkcije, določene v `handlers`, uporabljene namesto privzetega delovanja postopka, ko je za pogled uporabljen postopek.

Če je na voljo `binary`, so vse funkcije rutine izbirne. Če `binary` ni na voljo, je zahtevana funkcija rutine `GetStream`. Če funkcija rutine ni navedena za postopek, je privzeto delovanje postopka uporabljeno za `binary` (razen v primeru funkcije `GetExpression`).

Funkcije rutine za obravnavo morajo vrniti vrednost, ki je semantično enakovredna rezultatu uporabe postopka za `binary` (ali nastalega pogleda v primeru funkcije `GetExpression`).

Če pri funkciji rutine za obravnavo pride do napake, je za pogled uporabljeno privzeto delovanja postopka.

Parameter `Binary.View` lahko uporabite za izvedbo zlaganja v viru podatkov – prevod poizvedb M v poizvedbe, značilne za vir (npr. za ustvarjanje izjav T-SQL iz poizvedb M).

Popoln opis funkcije `Binary.View` najdete v objavljeni dokumentaciji za povezovalnik po meri Power Query.


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
