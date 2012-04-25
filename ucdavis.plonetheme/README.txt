Introduction
============


Responsive theme is made for Plone 4+ and can be used in two ways. 

#. You can install this as a regular theme. It is in reality Sunburst Theme but
   readjusted to be responsive to screen sizes. Don't uninstall "Plone Classic 
   Theme" that gets installed when you make a new Plone site. It is needed for 
   some of the page templates

#. You can use this as a base theme much like "Sunburst Theme" or "Plone
   Classic Theme" when you create your new theme.

   A. The most important step if you want to do this is to change your
      skins.xml file. For example say you made your theme product and called
      it "plonetheme.foo", you would go to
      plonetheme.foo/plonetheme/foo/profiles/default/skins.xml.
      In the line that says::

          <skin-path name="Foo Theme" based-on="Sunburst Theme">
          gets changed to::
          <skin-path name="Foo Theme" based-on="Responsive Theme">
 
   B. The next step is to make sure that the Responsive Theme gets installed
      when you install your new theme on multiple themes. There are two files
      to edit in your theme.  

      I. First file can be found at plonetheme.foo/setup.py. Edit this line::

            ...
            setup(
                ...    
                install_requires=[
                    'setuptools',
                    'plonetheme.responsivetheme'
                    # -*- Extra requirements: -*-
                ],
                ...
            )

      II. Second file can be found at 
          plonetheme.foo/plonetheme/foo/profiles/default metadata.xml. It 
          should look something like this::
      
              <?xml version="1.0"?>
              <metadata>
                <version>1</version>
                  <dependencies>
                      <dependency>profile-plonetheme.responsivetheme:default</dependency>
                  </dependencies>
              </metadata>




