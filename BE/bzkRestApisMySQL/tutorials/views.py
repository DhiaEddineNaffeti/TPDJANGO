from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from tutorials.models import Tutorial
from tutorials.serializers import TutorialSerializer

@api_view(['GET', 'POST'])
def tutorial_list(request):
    if request.method == 'GET':
        tutorials = Tutorial.objects.all()  # Fetch all tutorials from the database
        serializer = TutorialSerializer(tutorials, many=True)  # Serialize the tutorials
        return Response(serializer.data)  # Return the serialized data

    elif request.method == 'POST':
        serializer = TutorialSerializer(data=request.data)  # Deserialize incoming data
        if serializer.is_valid():
            serializer.save()  # Save the new tutorial to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Return the saved tutorial
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Handle invalid data

    return Response({"detail": "Method not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)  # Handle unsupported methods
