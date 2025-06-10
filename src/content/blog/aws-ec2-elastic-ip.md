---
title: "How to Use Elastic IP Address with AWS EC2 Instance: Complete Guide"
description: "This guide explains how to assign and manage an Elastic IP address for your AWS EC2 instance. Ensure consistent public IP access for your cloud server with ease."
date: "2025-04-09"
tags: ["aws"]
---

When launching an EC2 instance, the public IP address assigned to it can change if the instance is stopped and restarted. To avoid this, AWS provides **Elastic IP addresses**—a static IPv4 address designed for dynamic cloud computing.

In this guide, we’ll show you how to allocate and associate an Elastic IP address with your EC2 instance.

---

## Step 1: Allocate a New Elastic IP Address

From the AWS Management Console, go to the **EC2 Dashboard**, then select **Elastic IPs** from the sidebar. Click on **Allocate Elastic IP address** and confirm.

![Image 1](https://ik.imagekit.io/n1hqrcegw/articles/panduan-menggunakan-elastic-ip-address-ec2-instance/gambar-01.webp?updatedAt=1733759701308)

---

## Step 2: Associate the Elastic IP with Your EC2 Instance

Once the IP is allocated, select it from the list and click **Actions → Associate Elastic IP address**.

* In the **Resource type**, choose **Instance**.
* In **Instance**, select the EC2 instance you want to assign the IP to.
* Click **Associate** to finalize the configuration.

![Image 2](https://ik.imagekit.io/n1hqrcegw/articles/panduan-menggunakan-elastic-ip-address-ec2-instance/gambar-02.webp?updatedAt=1733759701308)

---

## Step 3: Verify IP Assignment

Go to your **EC2 Instances dashboard** and confirm that the public IP has been updated with your new Elastic IP.

This IP will remain the same even if you stop and start the instance.

![Image 3](https://ik.imagekit.io/n1hqrcegw/articles/panduan-menggunakan-elastic-ip-address-ec2-instance/gambar-03.webp?updatedAt=1733759701308)

---

## Conclusion

Elastic IP addresses are essential for maintaining a consistent public IP for your cloud services, especially for production environments. Remember that AWS charges for unused Elastic IPs, so always release any IP addresses that are no longer in use.

With this setup, your EC2 instance is now more stable and accessible under a static IP.

