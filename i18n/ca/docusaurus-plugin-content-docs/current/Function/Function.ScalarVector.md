---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Permet crear una funció escalar sobre una funció vectorial que transfereix múltiples invocacions en lots.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Torna una funció escalar del tipus <code>scalarFunctionType</code> que invoca <code>vectorFunction</code> amb una sola fina d'arguments i torna una sortida única. De manera addicional, si la funció escalar s'aplica repetidament per a cada fila de la taula d'entrades, com ara en el cas de Table.AddColumn, <code>vectorFunction</code> s'aplicarà una vegada per a totes les entrades.<br /><code>vectorFunction</code> rebrà una taula les columnes de la qual coincideixen en nom i posició amb els paràmetres de <code>scalarFunctionType</code>. Cada fila d'aquesta taula conté els arguments d'una trucada a la funció escalar, i les columnes corresponen als paràmetres de <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> ha de tornar una llista de la mateixa longitud que la taula d'entrada, i l'element de cada posició ha de ser el mateix resultat que el de l'avaluació de la funció escalar sobre la fila d'entrada de la mateixa posició.<br />S'espera que la taula d'entrada es transmeti en una seqüència, de manera que també s'espera que <code>vectorFunction</code> transmeti la sortida a mesura que rep l'entrada i que només treballi amb un fragment d'entrada alhora. En particular, <code>vectorFunction</code> no ha de llistar la taula d'entrada més d'una vegada.<br />



## Category
Function
