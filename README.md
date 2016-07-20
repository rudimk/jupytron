## Jupytron

Jupytron's a basic Electron wrapper around the brand new [Jupyter Lab](https://github.com/jupyter/jupyterlab). While the Lab is not for general use yet, it's fairly usable, and a desktop wrapper around it seemed to make a lot of sense.

### Usage

The idea is to release platform-specific bundles for Windows, Mac and Linux pretty soon. Until then, you can follow the steps below to run the code.

1. Clone this repository.

2. Make sure you have Jupyter installed, and available on the system path. To install the Jupyter Lab, run ```pip install jupyterlab```. Note that as of now, Jupytron doesn't support virtualenvs.

3. Get the Electron binary. You can either get it through NPM - ```npm install -g electron-prebuilt``` - then, run ```electron .``` within the source directory. The other option is to download the Electron release for your platform from [here](https://github.com/electron/electron/releases), and use the binary provided in the downloaded zip file to run the code. You can find more instructions [here](http://electron.atom.io/docs/tutorial/quick-start/#manually-downloaded-electron-binary).

And that's it! Precompiled binaries shall follow soon.

### Issues

As always, there are bugs. Fairly simple stuff. In a nutshell, Jupytron needs better support for resizing the Jupyter Lab frame when the window is resized, and it's probably a good idea to check if the Jupyter Lab server is actually running before instantiating a window object. Also, it wouldn't hurt to include a check to see if the Jupyter environment is installed, and throwing a message if it isn't. You can find a more comprehensive list of issues I'd like to fix [here](https://github.com/rudimk/jupytron/issues). 

Feel like contributing? That would make me real lucky and happy. Fork the repo, submit a PR, let's roll.