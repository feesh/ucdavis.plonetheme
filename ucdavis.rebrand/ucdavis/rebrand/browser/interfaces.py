from plone.theme.interfaces import IDefaultPloneLayer


class IThemeSpecific(IDefaultPloneLayer):
    """Marker interface that defines a Zope 3 browser layer.
       If you need to register a viewlet only for the
       "UC Davis Rebrand 2012" theme, this interface must be its layer
       (in rebrand/viewlets/configure.zcml).
    """
