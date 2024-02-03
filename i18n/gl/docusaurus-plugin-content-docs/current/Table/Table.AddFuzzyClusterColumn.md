---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Engade unha nova columna con valores representativos obtidos mediante o agrupamento aproximado de valores da columna especificada da táboa.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Engade unha nova columna <code>newColumnName</code> a <code>table</code> con valores representativos de <code>columnName</code>. Os valores representativos obtéñense buscando coincidencias parciais dos valores en <code>columnName</code>, para cada fila.    Pódese incluír un conxunto de <code>options</code> opcional para especificar como comparar as columnas de clave. As opcións inclúen:     <ul><li><code>Culture</code> : Permite agrupar rexistros segundo regras espec&#237;ficas da referencia cultural. Pode ser calquera nome de referencia cultural v&#225;lido. Por exemplo, un opci&#243;n de referencia cultural de &quot;ja-JP&quot; agrupa rexistros segundo a referencia cultural Xapon&#233;s. O valor predefinido &#233; &quot;&quot;, que agrupa segundo a referencia cultural Ingl&#233;s invariable.</li><li><code>IgnoreCase</code> : Valor l&#243;xico (verdadeiro/falso) que permite agrupar claves sen diferenciar entre mai&#250;sculas e min&#250;sculas. Por exemplo, se &#233; verdadeiro, &quot;Grapes&quot; agr&#250;pase con &quot;grapes&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>IgnoreSpace</code> : Valor l&#243;xico (verdadeiro/falso) que permite combinar partes de texto para buscar grupos. Por exemplo, se &#233; verdadeiro, &quot;Gra pes&quot; agr&#250;pase con &quot;Grapes&quot;. O valor predefinido &#233; verdadeiro.</li><li><code>SimilarityColumnName</code> : Nome para a columna que mostra a semellanza entre un valor de entrada e o valor representativo para a devandita entrada. O valor predefinido &#233; null e, nese caso, non se pode engadir unha columna para semellanzas nova.</li><li><code>Threshold</code> : N&#250;mero entre 0,00 e 1,00 que especifica a puntuaci&#243;n de semellanza na que se agrupar&#225;n dous valores.    Por exemplo, &quot;Grapes&quot; e &quot;Graes&quot; (falta o &quot;p&quot;) agruparanse s&#243; se esta opci&#243;n est&#225; configurada en menos de 0,90.    Un limiar de 1,00 permite s&#243; coincidencias exactas.    (T&#233;&#241;ase en conta que unha “coincidencia exacta” aproximada pode ignorar diferenzas como mai&#250;sculas e min&#250;sculas, orde das palabras e puntuaci&#243;n).    O valor predefinido &#233; 0,80.</li><li><code>TransformationTable</code> : T&#225;boa que permite agrupar rexistros segundo asignaci&#243;ns de valores personalizadas. Debe conter as columnas &quot;Desde&quot; e &quot;At&#233;&quot;. Por exemplo, &quot;Grapes&quot; agr&#250;pase con &quot;Raisins&quot; se se fornece unha t&#225;boa de transformaci&#243;n na que a columna &quot;Desde&quot; conte&#241;a &quot;Grapes&quot; e a columna &quot;At&#233;&quot; conte&#241;a &quot;Raisins&quot;. Te&#241;a en conta que se aplicar&#225; a transformaci&#243;n a todas as ocorrencias do texto na t&#225;boa de transformaci&#243;n. Coa t&#225;boa de transformaci&#243;n anterior, &quot;Grapes are sweet&quot; agruparase tam&#233;n con &quot;Raisins are sweet&quot;.</li></ul><br />    


## Examples

### Example #1 
Busque os valores representativos para a localización dos empregados.
```powerquery
Table.AddFuzzyClusterColumn(
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
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
