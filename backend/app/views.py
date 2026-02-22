from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models import Number

class IndexView(APIView):
    def get(sefl, request):
        return render(request, "index.html")

class GenerateNumberView(APIView):
    def get(self, request):
        numbers_from_admin = Number.objects.filter(
            used=False
        ).order_by("order")
        values = [number.value for number in numbers_from_admin]
        return Response(values)

    def post(self, request):
        value = request.data.get('value')
        updated_count = Number.objects.filter(value=value).update(used=True)
        return Response({
            "message": f"Обновлено {updated_count} записей",
            "updated_count": updated_count
        })