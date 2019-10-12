from django.http import JsonResponse
from django.http import request
from api import models

def login():
    data = {"code":1000, "msg":""}
    data["Access - Control - Allow - Origin"] = " * "
    data["Access - Control - Allow - Methods"] = "POST, GET, OPTIONS"
    data["Access - Control - Max - Age"] = "1000"
    data["Access - Control - Allow - Headers"] = " * "
    try:
        username = request.POST.get("username")
        password = request.POST.get("password")
        print("登录信息：", username, password)
        search = models.userInfo.objects.filter(username = username)
        #username exists
        if(search):
            search1 = models.userInfo.objects.filter(username=username, password = password)
            if(search1):
                return JsonResponse(data)
            else:
                data = {"code":1001, "msg":"密码错误"}
        else:
            data = {"code":1001, "msg":"用户名不存在"}

    except Exception as e :
        data = {"code":1001, "msg":"后台程序异常"}
        print(e)
        return JsonResponse(data)

def register():
    data = {"code": 1000, "msg": ""}
    try:
        username = request.POST.get("username")
        password = request.POST.get("password")
        print("注册信息：", username, password)
        search = models.userInfo.objects.filter(username=username)
        # username does not exist
        if (not search):
            models.userInfo.objects.update_or_create(username=username, password=password)
            return JsonResponse(data)
        else:
            data = {"code": 1001, "msg": "用户名已存在"}
            return JsonResponse(data)

    except Exception as e:
        data = {"code": 1001, "msg": "后台程序异常"}
        print(e)
        return JsonResponse(data)





