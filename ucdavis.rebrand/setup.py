from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='ucdavis.rebrand',
      version=version,
      description="A Diazo theme for Plone 4 based on  the UC Davis rebrand of 2012",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='plone theme ucdavis diazo',
      author='Tyler Randles',
      author_email='hennaheto@gmail.com',
      url='https://github.com/feesh/ucdavis.plonetheme/tree/master/ucdavis.rebrand',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['ucdavis'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'plone.app.theming',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      setup_requires=["PasteScript"],
      paster_plugins=["ZopeSkel"],
      )
