---
title: Table.Distinct
---

# Table.Distinct


Remove linhas duplicadas da tabela.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Remove linhas duplicadas da tabela.    Um parâmetro opcional, <code>equationCriteria</code>, especifica quais colunas da tabela são testadas quanto à duplicação. Se <code>equationCriteria</code> não for especificado, todas as colunas serão testadas.<br />    <br />    Como o Power Query às vezes descarrega determinadas operações para fontes de dados de back-end (conhecidas como "dobragem"), e às vezes otimiza as consultas por     ignorando operações que não são estritamente necessárias. Em geral, não há garantia de qual duplicata específica será preservada.    Por exemplo, você não pode presumir que a primeira linha com um conjunto exclusivo de valores de coluna permanecerá e as linhas mais abaixo na tabela serão removidas.    Se desejar que a remoção de duplicatas se comporte de forma previsível, primeiro faça o buffer da tabela usando <code>Table.Buffer</code>.


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
Remova as linhas duplicadas da coluna [b] na tabela &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
