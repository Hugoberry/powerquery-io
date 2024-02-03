---
title: Binary.View
---

# Binary.View


## Description

Vytvorí alebo rozšíri binárny súbor s používateľom definovanými obslužnými programami pre operácie dotazu a akcií.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Vráti zobrazenie tabuľky <code>binary</code>, kde sa funkcie zadané v <code>handlers</code> používajú namiesto predvoleného správania operácie, keď sa daná operácia použije na zobrazenie.<br />Ak je <code>binary</code> poskytnuté, funkcie obslužných programov sú voliteľné. Ak nie je <code>binary</code> poskytnuté, funkcia obslužných programov <code>GetStream</code> je vyžadovaná. Ak pre operáciu nie je zadaná funkcia obslužného programu, na zobrazenie <code>binary</code> sa použije predvolené správanie operácie (okrem prípadu <code>GetExpression</code>).<br />Funkcie obslužných programov musia vrátiť hodnotu, ktorá je sémanticky ekvivalentná výsledku použitia operácie na zobrazenie <code>binary</code> (alebo v prípade <code>GetExpression</code> na výsledné zobrazenie).<br />Ak funkcia obslužného programu vyvolá chybu, na zobrazenie sa použije predvolené správanie operácie.<br /><code>Binary.View</code> možno použiť na implementáciu zbalenia do zdroja údajov – preklad dotazov M do operácií špecifických pre zdroj (napríklad na stiahnutie sekcie súboru).<br />Podrobnejší popis funkcie <code>Binary.View</code> nájdete v publikovanej dokumentácii vlastného konektora Power Query.<br />


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
