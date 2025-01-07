<div align="center">

# **NovaFlare**

v1.0.0

</div>

## Design

_Insert your web design here_

## Docs

_Coming soon_

## Pull & Push Schema

1. Checkout to develop branch
2. Pull origin develop (awas sampe ga dilakuin)
3. Create a new branch (Please read the rule below this section)
4. Checkout to the new branch
5. Code
6. Commit (Please follow the commit messages rule)
7. Pull origin develop
8. Push origin "your branch name"
9. Create a new pull request to develop branch and mention me (arya) :v
10. Done

## Branch Naming

```
<type>/<short_description>.<your_name>
```

### Branch type:

- feature: saya menambahkan fitur baru
- fixing: saya memperbaiki fitur

Contoh: feature/navbar.arya

## Commit message

```
<type>(<scope>): <short_summary>
```

example: feat(Homepage): Creating homepage section

### Commit type:

- `ci`: Changes to our CI configuration files and scripts
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation
  generation
- `docs`: Documentation only changes
- `ticket`: Changes that are related to a ticket
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: Reverts a previous commit
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)

## Folder Structure

```
- public: file public (including assets)
- app : Contain all pages
- src
    - templates: al novaflare templates are here
    - components : all components (layouts, button, navbar, etc)
    - helpers : pembantu (fetch backend, etc)
    - hooks : custom hooks
    - context: custom context
    - modules: all views
        - [Page name]
            - page.js
```

## Notes

## Author

- Hilmi Dzaki Wismadi
- Sakti Cahya Buana
- Polikarpus Arya Pradhanika @mie-intel
