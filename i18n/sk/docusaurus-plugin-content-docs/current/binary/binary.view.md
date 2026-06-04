---
title: Binary.View
---

# Binary.View


Vytvorí alebo rozšíri binárny súbor s používateľom definovanými obslužnými programami pre operácie dotazu a akcií.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Vráti zobrazenie tabuľky `binary`, kde sa funkcie zadané v `handlers` používajú namiesto predvoleného správania operácie, keď sa daná operácia použije na zobrazenie.

Ak je `binary` poskytnuté, funkcie obslužných programov sú voliteľné. Ak nie je `binary` poskytnuté, funkcia obslužných programov `GetStream` je vyžadovaná. Ak pre operáciu nie je zadaná funkcia obslužného programu, na zobrazenie `binary` sa použije predvolené správanie operácie (okrem prípadu `GetExpression`).

Funkcie obslužných programov musia vrátiť hodnotu, ktorá je sémanticky ekvivalentná výsledku použitia operácie na zobrazenie `binary` (alebo v prípade `GetExpression` na výsledné zobrazenie).

Ak funkcia obslužného programu vyvolá chybu, na zobrazenie sa použije predvolené správanie operácie.

`Binary.View` možno použiť na implementáciu zbalenia do zdroja údajov – preklad dotazov M do operácií špecifických pre zdroj (napríklad na stiahnutie sekcie súboru).

Podrobnejší popis funkcie `Binary.View` nájdete v publikovanej dokumentácii vlastného konektora Power Query.


## Examples

### Example #1
Na určenie dĺžky vytvorte základné zobrazenie, ktoré nevyžaduje prístup k údajom.
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
