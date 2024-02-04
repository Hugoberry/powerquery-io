---
title: Table.Distinct
---

# Table.Distinct


## Description

Remove linhas duplicadas da tabela.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Remove linhas duplicadas da tabela.    Um parâmetro opcional, <code>equationCriteria</code>, especifica que colunas da tabela são testadas para duplicação. Se <code>equationCriteria</code> não for especificado, todas as colunas são testadas.<br />    <br />    Uma vez que o Power Query descarrega, por vezes, determinadas operações para as origens de dados de back-end (operação conhecida como "dobragem") e, por vezes, otimiza as consultas ao     ignorar as operações que não são estritamente necessárias, de um modo geral, não existe nenhuma garantia sobre que duplicados específicos serão preservados.    Por exemplo, não deve assumir que a primeira linha com um conjunto exclusivo de valores de coluna será preservada e que as linhas mais abaixo na tabela serão removidas.    Se quiser que a remoção de duplicados se comporte de forma previsível, primeiro coloque a tabela em memória intermédia, através de <code>Table.Buffer</code>.


## Examples

### Example #1 
Remover as linhas duplicadas da tabela.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Remover as linhas duplicadas da coluna [b] na tabela &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
