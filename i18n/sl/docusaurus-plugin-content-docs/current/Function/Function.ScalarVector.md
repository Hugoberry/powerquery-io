---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Ustvari skalarno funkcijo poleg vektorske funkcije in v en paket združi več priklicev.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Vrne skalarno funkcijo vrste "<code>scalarFunctionType</code>", ki prikliče <code>vectorFunction</code> z eno vrstico argumentov in vrne en sam rezultat. Če je skalarna funkcija uporabljena zaporedoma za vsako vrstico tabele rezultatov, kot je "Table.AddColumn", bo poleg tega <code>vectorFunction</code> uporabljena za vse vnose.<br /><code>vectorFunction</code> bo uporabljena v tabeli, katere stolpci se ujemajo v imenu in položaju parametrov funkcije <code>scalarFunctionType</code>. Vsaka vrstica te tabele vsebuje argumente za en klic skalarne funkcije s stolpci, ki ustrezajo parametrom fukcije <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> mora vrniti seznam z enako dolžino kot vhodna tabela, katere element na vsakem položaju mora biti isti rezultat kot ovrednotenje skalarne funkcije v vnosni vrstici istega položaja.<br />Pričakovano je, da je vnosna tabela pretakana, zato je pričakovano, da <code>vectorFunction</code> pretaka svoj rezultat, ko je dodan vnos, in deluje samo z enim koščkom vnosa hkrati. Zlasti <code>vectorFunction</code> ne sme oštevilčiti svoje vnosne tabele več kot enkrat.<br />



## Category
Function
