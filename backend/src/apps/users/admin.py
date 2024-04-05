from django.contrib import admin
from .models import User, Shelter


class UserAdminPanel(admin.ModelAdmin):
    """
    Admin panel configuration for the User model.
    """

    list_display = (
        "uuid",
        "email",
        "password",
        "is_staff",
        "is_superuser",
        "is_active",
        "date_joined",
        "last_login",
    )
    search_fields = (
        "uuid",
        "email",
        "is_staff",
        "is_superuser",
        "is_active",
    )


class ShelterAdminPanel(admin.ModelAdmin):
    """
    Admin panel configuration for the Shelter model.
    """

    list_display = (
        "uuid",
        "user",
        "name",
        "address",
        "phone_number",
        "responsible",
        "logo_url",
        "data_joined",
    )
    search_fields = (
        "uuid",
        "user",
    )


admin.site.register(model_or_iterable=User, admin_class=UserAdminPanel)
admin.site.register(model_or_iterable=Shelter, admin_class=ShelterAdminPanel)
