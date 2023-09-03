# mozilla-profile-utils

A collection of utilities for working with Mozilla profiles; Firefox, Thunderbird and derivatives

## Usage

### `render`

Takes a collection of [Jinja](https://jinja.palletsprojects.com/) templates and renders a `user.js` file

To see the built-in help:

```bash
./render --help
```

An example, using the provided configuration file, from the root of this repository would look like:

```bash
./render -c examples/firefox.config.json build
```

:construction: Additional templates will be published after license review.  An example produced with all current templates is my [Day-to-Day.user.js](https://gist.github.com/bberberov/685b4d0726fb7522a6e58382d887adcf)

## Requirements

`render` uses and depends on [Jinja](https://jinja.palletsprojects.com/).

## :balance_scale: License

Licensed under the [EUPL-1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12) only.
