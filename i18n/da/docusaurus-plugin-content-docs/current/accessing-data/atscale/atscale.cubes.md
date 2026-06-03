---
title: AtScale.Cubes
---

# AtScale.Cubes


Import/DirectQuery-kubedata fra en AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Returnerer kubedata fra AtScale på serveren `server`. Der kan angives en valgfri parameterpost, `indstillinger`, til at styre følgende indstillinger:

-   `TypedMeasureColumns`: en logisk værdi, der angiver, om typerne angivet i MDX- eller tabelmodellen skal bruges til typerne i de tilføjede målingskolonner. Når den er indstillet til false, bruges typen "tal" for alle målingenskolonner. Standardværdien for denne indstilling er false.
-   `CommandTimeout`: en varighed (i sekunder), som styrer, hvor længe forespørgslen på serversiden kan køre, før den annulleres. Standardværdien afhænger af driveren.
-   `ConnectionTimeout`: en varighed (i sekunder), som styrer, hvor længe der går, før et forsøg på at oprette en forbindelse til serveren afbrydes. Standardværdien afhænger af driveren.

Postparameteret angives som \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Vis kubedata i en AtScale-kube.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



