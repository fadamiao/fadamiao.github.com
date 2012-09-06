fadamiao.github.com
=============

Apenas o meu site pessoal no GitHub


O 'github.js' foi inspirado em uma função no site da [Locaweb no GitHub](http://locaweb.github.com), agora além de listar os repositórios públicos (de usuários), lista os gists públicos.
Basta ter uma div com id 'repositories' e outra com id 'gists' e dizer o usuário que quer listar.

```
<div id="repositories"></div>
<div id="gists"></div>
<script>Repos.populate("fadamiao");</script>
<script>Gists.populate("fadamiao");</script>
```
