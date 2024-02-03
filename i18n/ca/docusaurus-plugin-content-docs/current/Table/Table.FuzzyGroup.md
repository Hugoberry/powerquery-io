---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Agrupa les files de la taula a partir d&#39;una coincidència aproximada de les claus.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Details

Agrupa les files de <code>table</code> mitjançant la creació de coincidències aproximades dels valors de la columna especificada <code>key</code> per a cada fila.    Per a cada grup, es construeix un registre que conté les columnes clau (i els seus valors) juntament amb qualsevol columna agregada que hagi especificat <code>aggregatedColumns</code>.    Aquesta funció no pot garantir que es retorni un ordre fix de files.    Es pot incloure un conjunt opcional d'elements <code>options</code> per especificar com es comparen les columnes clau. Les opcions inclouen:     <ul><li><code>Culture</code> : Permet agrupar registres en funci&#243; de normes espec&#237;fiques de la refer&#232;ncia cultural. Pot ser qualsevol nom de refer&#232;ncia cultural v&#224;lid. Per exemple, una opci&#243; de refer&#232;ncia cultural &quot;ja-JP&quot; agrupa els registres segons la cultura japonesa. El valor per defecte &#233;s &quot;&quot;, que fa agrupacions basades en la refer&#232;ncia cultural invariable Angl&#232;s.</li><li><code>IgnoreCase</code> : Valor l&#242;gic (true o false) que permet l&#39;agrupaci&#243; de claus que no diferencien entre maj&#250;scules i min&#250;scules. Per exemple, si &#233;s true, &quot;Ra&#239;m&quot; s&#39;agrupa amb &quot;grapes&quot;. El valor per defecte &#233;s true.</li><li><code>IgnoreSpace</code> : Valor l&#242;gic (true o false) que permet la combinaci&#243; de parts del text per trobar grups. Per exemple, si &#233;s true, &quot;Gra pes&quot; s&#39;agrupa amb &quot;Grapes&quot;. El valor per defecte &#233;s true.</li><li><code>SimilarityColumnName</code> : Nom de la columna que mostra la similitud entre un valor d&#39;entrada i el valor representatiu de l&#39;entrada. El valor per defecte &#233;s nul i, en aquest cas, no s&#39;afegir&#224; cap columna nova per a les similituds.</li><li><code>Threshold</code> : Nombre entre 0,00 i 1,00 que especifica la puntuaci&#243; de similitud en qu&#232; s&#39;agruparan dos valors.    Per exemple, &quot;Grapes&quot; i &quot;Graes&quot; (falta la &quot;p&quot;) nom&#233;s s&#39;agrupen si aquesta opci&#243; est&#224; definida amb un valor inferior a 0,90.    Un llindar d&#39;1,00 nom&#233;s permet coincid&#232;ncies exactes.    (Tingueu en compte que una &quot;coincid&#232;ncia exacta&quot; aproximada podria ignorar difer&#232;ncies com ara l&#39;&#250;s de maj&#250;scules i min&#250;scules, l&#39;ordre de les paraules i la puntuaci&#243;.)    El valor per defecte &#233;s 0,80.</li><li><code>TransformationTable</code> : Taula que permet agrupar registres en funci&#243; de les assignacions de valors personalitzats. Hauria de contenir les columnes &quot;From&quot; i &quot;To&quot;. Per exemple, &quot;Grapes&quot; s&#39;agrupa amb &quot;Raisins&quot; si es proporciona una taula de transformaci&#243; amb una columna &quot;From&quot; que cont&#233; &quot;Grapes&quot; i una columna &quot;To&quot; que cont&#233; &quot;Raisins&quot;. Tingueu en compte que la transformaci&#243; s&#39;aplicar&#224; a totes les aparicions del text a la taula de transformaci&#243;. Amb la taula de transformaci&#243; anterior, &quot;Grapes are sweet&quot; tamb&#233; s&#39;agrupar&#224; amb &quot;Raisins are sweet&quot;.</li></ul><br />    


## Examples

### Example #1 
Per agrupar la taula, afegiu una columna agregada [Count] que contingui el nombre d&#39;empleats de cada ubicació (&#34;each Table.RowCount(_))&#34;).
```powerquery
Table.FuzzyGroup(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
