def noop(context):
    pass

def reinstall(context):
    context.runAllImportStepsFromProfile('profile-ucdavis.plonetheme:uninstall')
    context.runAllImportStepsFromProfile('profile-ucdavis.plonetheme:default')

def upgrade1001to1002(context):
    context = getToolByName(context, "portal_setup")
    context.runAllImportStepsFromProfile('profile-ucdavis.plonetheme:1001to1002', purge_old=False)


