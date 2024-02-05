---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Import/DirectQuery-kubedata fra en AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Returnerer kubedata fra AtScale på serveren <code>server</code>. Der kan angives en valgfri parameterpost, <code>indstillinger</code>, til at styre følgende indstillinger:<ul>        <li><code>TypedMeasureColumns</code>: en logisk værdi, der angiver, om typerne angivet i MDX- eller tabelmodellen skal bruges til typerne i de tilføjede målingskolonner. Når den er indstillet til false, bruges typen "tal" for alle målingenskolonner. Standardværdien for denne indstilling er false.</li>        <li><code>CommandTimeout</code>: en varighed (i sekunder), som styrer, hvor længe forespørgslen på serversiden kan køre, før den annulleres. Standardværdien afhænger af driveren. </li>        <li><code>ConnectionTimeout</code>: en varighed (i sekunder), som styrer, hvor længe der går, før et forsøg på at oprette en forbindelse til serveren afbrydes. Standardværdien afhænger af driveren. </li></ul>Postparameteret angives som [option1 = value1, option2 = value2...].


