---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Kreira skalarnu funkciju na vrhu vektorske funkcije, grupišući više pozivanja.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Vraća skalarnu funkciju tipa <code>scalarFunctionType</code> koja poziva <code>vectorFunction</code> sa jednim redom argumenata i vraća jedan rezultat. Pored toga, kada se skalarna funkcija stalno primenjuje za svaki red tabele unosa, kao što je Table.AddColumn, <code>vectorFunction</code> će biti primenjen jednom za sve unose.<br /><code>vectorFunction</code> će proslediti tabelu čije kolone se podudaraju po imenu i položaju parametara za <code>scalarFunctionType</code>. Svaki red ove tabele sadrži argumente za jedan poziv za skalarnu funkciju, sa kolonama koje odgovaraju parametrima za <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> mora da vrati listu iste dužine kao ulazna tabela, čija stavka na svakom položaju mora biti isti rezultat kao procena skalarne funkcije u ulaznom redu istog položaja.<br />Očekuje se da je ulazna tabela strimovana, tako da se očekuje da <code>vectorFunction</code> strimuje rezultat kako se pojavi unos, radeći samo sa jednim unosom istovremeno. <code>vectorFunction</code> posebno ne sme da prebrojava ulaznu tabelu više od jednom.<br />



## Category
Function
